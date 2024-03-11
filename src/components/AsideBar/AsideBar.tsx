import './AsideBar.scss';

export const AsideBar = () => {
  const user = false;

  return (
    <aside className="aside">
      <h2 className='aside__title'>
        {user ? 'Your' : 'Recommended channels'}
      </h2>
    </aside>
  );
};