import { type ReactElement, useCallback, useRef, useState } from 'react';
import styles from './styles.module.css';
import Scroll from './scroll';

export type FetchDataFn = (
  q: string,
  p: string
) => Promise<{ docs: ({ title: string } & Record<string, unknown>)[] }>;

export type DataType = Awaited<ReturnType<FetchDataFn>>['docs'];

export type RenderItemFn = (
  d: DataType[number],
  k: string,
  r: ((e: HTMLDivElement) => void) | null
) => ReactElement;

const InfinityScroll = () => {
  const [inputQuery, setInputQuery] = useState<string>('');
  const [data, setData] = useState<DataType>([]);

  const controllerRef = useRef<AbortController>(new AbortController());

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuery(e.target.value);
  }, []);

  const fetchData = useCallback<FetchDataFn>(async (q, page) => {
    return new Promise((resolve, reject) => {
      if (controllerRef.current) controllerRef.current.abort('');

      controllerRef.current = new AbortController();

      fetch(
        'https://openlibrary.org/search.json?' +
          new URLSearchParams({ q, page }),
        { signal: controllerRef.current.signal }
      )
        .then(async (response) => {
          const d = (await response.json()) as Awaited<ReturnType<FetchDataFn>>;
          setData((p) => [...p, ...d.docs]);
          resolve(d);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }, []);

  const renderItem = useCallback<RenderItemFn>(({ title }, key, ref) => {
    return (
      <div key={key} ref={ref}>
        {title}
      </div>
    );
  }, []);

  return (
    <div className={styles.rootDiv}>
      <input type='text' value={inputQuery} onChange={inputHandler} />
      <Scroll
        {...{ query: inputQuery, fetchData, dataList: data, renderItem }}
      />
    </div>
  );
};

export default InfinityScroll;
