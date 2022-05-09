import { useEffect, useState } from 'react';
import classes from './Main.module.scss';

const IMAGES_PATH = [
  '/cherry-blossom.jpg',
  '/cherry-blossom2.jpg',
  '/cherry-blossom3.jpg',
  '/cherry-blossom4.jpg',
];

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagesIndex, setImagesIndex] = useState(0);

  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };

  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImagesIndex((prevIndex) => {
        let returnedIndex;
        if (prevIndex === 3) returnedIndex = 0;
        else returnedIndex = prevIndex + 1;
        return returnedIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {isModalOpen && (
        <div className={classes.modal}>
          <div className={classes.wrapper}>
            <img
              className={classes.wrapper__img}
              alt='blossom'
              src={IMAGES_PATH[imagesIndex]}
            />
            <p>벛꽃 구경하고 가세요~</p>
            <button
              type='button'
              onClick={modalCloseHandler}
              className={classes.modal__close}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className={classes.content}>
        <div className={classes.content__header}>
          <h1 className={classes['content__header--title']}>
            멋쟁이 사자 10기 웹 파트
          </h1>
          <h1 className={classes['content__header--name']}>김보현</h1>
        </div>
        <div className={classes.content__main}>
          <p>학번 : 60172136</p>
          <p>전공 : 컴퓨터공학과</p>
          <p>나이 : 25살</p>
          <p>MBTI : INFJ</p>
          <p>좋아하는 것 : 자는 것</p>
          <p>취미 : 잠, 여행</p>
          <p>특이사항 : 주말에 잠수</p>
          <p>애완견 : 초코 (11살)</p>
        </div>
        <button
          type='button'
          className={classes.modal__open}
          onClick={modalOpenHandler}
        >
          클릭해주세요!
        </button>
      </div>
    </main>
  );
}

export default Main;
