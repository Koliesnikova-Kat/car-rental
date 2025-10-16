import s from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ setPage }) {
  return (
    <>
      <button type='button' className={s.button} onClick={setPage}>
        Load more
      </button>
    </>
  );
}
