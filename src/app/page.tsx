'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  const sectionRef = useRef(null);
  const cardRefs = useRef<HTMLElement[]>([]);
  cardRefs.current = [];

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInVisible);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    // sectionRefを監視
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // カードの参照を監視
    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const cardContainers = document.querySelectorAll('.cardContainer');
    cardContainers.forEach((container) => {
      observer.observe(container);
    });

    // クリーンアップ
    return () => {
      cardContainers.forEach((container) => {
        observer.unobserve(container);
      });
    };
  }, []); // useEffectの第二引数に空の配列を渡して初回レンダリング時のみ実行

  return (
    <main className={styles.main}>
      <div>
        <div ref={sectionRef} className={styles.section01}>
          <p className={styles.fadein01}>今日やりたいことは</p>
        </div>
        <div ref={sectionRef} className={styles.section01}>
          <p className={styles.fadein01}>
            カードタイプのフェードインアニメーションは
            <br />
            どの数値が心地よいのか？
          </p>
          <div className={styles.cardContainer}>
            <div ref={addToRefs} className={`${styles.card} ${styles.card01}`}>
              <Image
                src="/images/card01.png"
                width={280}
                height={186}
                alt="card01"
              />
              <div className={styles.cardInnerBox}>
                <h3>どこかわからん絶景</h3>
                <p>
                  ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
                </p>
              </div>
            </div>
            <div ref={addToRefs} className={`${styles.card} ${styles.card02}`}>
              <Image
                src="/images/card02.png"
                width={280}
                height={186}
                alt="card01"
              />
              <div className={styles.cardInnerBox}>
                <h3>沖縄</h3>
                <p>
                  沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
                </p>
              </div>
            </div>
            <div ref={addToRefs} className={`${styles.card} ${styles.card03}`}>
              <Image
                src="/images/card03.png"
                width={280}
                height={186}
                alt="card01"
              />
              <div className={styles.cardInnerBox}>
                <h3>富士山</h3>
                <p>
                  これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
                  それは想像におまかせするよ。まぁAIなんだけどね
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={sectionRef} className={styles.textfadeSection01}>
        <div className={styles.text01}>0.1s Animation</div>
        <div className={styles.text02}>0.2s Animation</div>
        <div className={styles.text03}>0.3s Animation</div>
        <div className={styles.text04}>0.4s Animation</div>
        <div className={styles.text05}>0.5s Animation</div>
        <div className={styles.text06}>0.6s Animation</div>
        <div className={styles.text07}>0.7s Animation</div>
        <div className={styles.text08}>0.8s Animation</div>
        <div className={styles.text09}>0.9s Animation</div>
        <div className={styles.text10}>1.0s Animation</div>
        <div className={styles.text11}>1.1s Animation</div>
        <div className={styles.text12}>1.2s Animation</div>
        <div className={styles.text13}>1.3s Animation</div>
        <div className={styles.text14}>1.4s Animation</div>
        <div className={styles.text15}>1.5s Animation</div>
      </div>
      <div className={styles.section01}>
        <Image
          className={styles.text0}
          src="/images/funassy.jpg"
          width={540}
          height={320}
          alt="card01"
        />
      </div>
      <div className={styles.section01}>
        <p>今回用意したもの</p>
      </div>
      <p className={styles.textcenter}></p>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card01}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card02}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card03}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section01}>
        <p>そもそもフェードインってどんな効果があるのか？</p>
        <span></span>
      </div>
      <div className={styles.section01}>
        <p>今回は</p>
        <div className={styles.textgrid}>
          <p>アニメーションの長さ</p>
          <p>delay</p>
          <p>イージングタイプ</p>
        </div>
        <p>この3つをみていきます</p>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn ease-in-out 2s</p>
        <p className={styles.title}>
          ① animation: 2s;
          <br />
          ② animation: 2s;
          <br />③ animation: 2s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card016}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card017}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card018}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section01}>
        <p>2sは長すぎだけど時と場合によってはあり。</p>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn ease-in-out 0.1s</p>
        <p className={styles.title}>
          ① animation: 0.1s;
          <br />
          ② animation: 0.1s;
          <br />③ animation: 0.1s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card019}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card020}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card021}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>

      <div className={styles.section01}>
        <p>早すぎて、もはやいらない</p>
      </div>
      <div className={styles.section01}>
        <p>0.4-1.2sがいいのではないか？</p>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>左から</p>
        <p className={styles.title}>
          ① animation: fadeIn 0.4s ease-in-out forwards;
          <br />
          ② animation: fadeIn 0.8s ease-in-out forwards;
          <br />③ animation: fadeIn 1.2s ease-in-out forwards;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card01}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card02}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card03}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section01}>
        <p>0.4はちょうどよさそう</p>
      </div>
      <div className={styles.section02}>
        <p>0.4sパターン</p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card024}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card025}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card026}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section02}>
        <p>0.5sパターン</p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card027}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card028}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card029}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section02}>
        <p>0.6sパターン</p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card030}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card031}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card032}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section02}>
        <p>0.7sパターン</p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card050}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card050}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card050}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section02}>
        <p>0.8sパターン</p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card051}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう.
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card051}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です.
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card051}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section02}>
        <p>0.9sパターン</p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card052}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう.
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card052}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です.
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card052}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section02}>
        <p>1.0sパターン</p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card053}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう.
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card053}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です.
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card053}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn 0.4s</p>
        <p className={styles.title}>
          ① animation-delay: 0.4s;
          <br />
          ② animation-delay: 0.8s;
          <br />③ animation-delay: 1.2s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card04}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card05}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card06}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section01}>
        <p>
          見え方としてはすごくよくなったけど、
          <br />
          ちょっと遅くないか？
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card040}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card041}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card042}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn 0.4s</p>
        <p className={styles.title}>
          ① animation-delay: 0.4s;
          <br />
          ② animation-delay: 0.6s;
          <br />③ animation-delay: 0.8s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card07}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card08}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card09}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn 0.4s</p>
        <p className={styles.title}>
          ① animation-delay: 0.1s;
          <br />
          ② animation-delay: 0.2s;
          <br />③ animation-delay: 0.3s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card060}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card061}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card062}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn 0.8s</p>
        <p className={styles.title}>
          ① animation-delay: 0.4s;
          <br />
          ② animation-delay: 0.6s;
          <br />③ animation-delay: 0.8s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card063}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card064}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card065}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn 0.6s</p>
        <p className={styles.title}>
          ① animation-delay: 0.4s;
          <br />
          ② animation-delay: 0.6s;
          <br />③ animation-delay: 0.8s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card066}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card067}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card068}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>

      <div className={styles.section01}>
        <p>
          ease-inも
          <br />
          試してみたい
        </p>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn ease-in 0.4s</p>
        <p className={styles.title}>
          ① animation-delay: 0.4s;
          <br />
          ② animation-delay: 0.6s;
          <br />③ animation-delay: 0.8s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card010}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card011}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card012}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section01}>
        <p>
          ちょっとよくわからないけど
          <br />
          なんかもっさり
        </p>
      </div>
      <div>
        <p className={styles.title}>カードタイプのフェードイン</p>
        <p className={styles.title}>全て fadeIn ease-out 0.4s</p>
        <p className={styles.title}>
          ① animation-delay: 0.4s;
          <br />
          ② animation-delay: 0.6s;
          <br />③ animation-delay: 0.8s;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div ref={addToRefs} className={`${styles.card} ${styles.card010}`}>
          <Image
            src="/images/card01.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>どこかわからん絶景</h3>
            <p>
              ここはよくわからないけど、めっちゃ綺麗な絶景ポジションで、夜は綺麗な星がみれますが一人で来るとまず寂しくて景色どころではないでしょう。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card011}`}>
          <Image
            src="/images/card02.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>沖縄</h3>
            <p>
              沖縄の海ですが、ここは沖縄の海です。それ以上はありません。綺麗です。
            </p>
          </div>
        </div>
        <div ref={addToRefs} className={`${styles.card} ${styles.card012}`}>
          <Image
            src="/images/card03.png"
            width={280}
            height={186}
            alt="card01"
          />
          <div className={styles.cardInnerBox}>
            <h3>富士山</h3>
            <p>
              これは富士山です。夕方の富士山はとても綺麗です。どこから撮ったかって？
              それは想像におまかせするよ。まぁAIなんだけどね
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section01}>
        <p>新たなトリビアが生まれた</p>
      </div>
      <div className={styles.section01}>
        <p>
          ぶっちゃけイージング
          <br />
          スピードどうでもいい説
          <br />
          ease-inはもっさりだけど、
          <br />
          ease-in-outもease-outもかわらん。
        </p>
      </div>
    </main>
  );
}
