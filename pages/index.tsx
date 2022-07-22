import type { NextPage } from 'next';
import Head from 'next/head';
import { Navigation } from '../components/navigation';
import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { H1, H2 } from '../components/headers';
import { Text } from '../components/text';
import { WorkCard } from '../components/workCard';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>kosei28</title>
        <meta name="description" content="kosei28 のポートフォリオサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container>
        <section id="about">
          <H1>I am...</H1>
          <H2>kosei28!!!</H2>
          <Text>
            <p>
              プログラミングが好きな大学1年生。
              中学生の頃から完全に独学でやってたけど、今は大学で情報を学んでいる。
            </p>
            <p>
              最近は React / Next.js
              とかフロントエンドばっかりやってるけど、デザインもできるフルスタック目指してる。
              フロントエンドは React / Svelte + Tailwind CSS が好きで、バックエンドは NestJS +
              Prisma + PlanetScale が好き。
            </p>
          </Text>
        </section>

        <section id="philosophy">
          <H1>Philosophy</H1>
          <H2>アプリは UI / UX が命</H2>
          <Text>
            <p>
              今まで、いろんなサービスやアプリを使ってきて感じたのは、自分が良いと感じるアプリは UI
              / UX のデザインが最高にイケてるということ。 たとえ UI
              が悪くても儲かってたとしても、ユーザーは良い体験を求めるし、開発者としてはユーザーに良い体験を提供したい。
              それが結局ユーザーの評価になりアプリの未来になると思う。
            </p>
            <p>
              でも、日本のアプリは UX が悪いものがとても多いと感じる。
              そこが日本のソフトウェアの人材不足だけではない弱さでもあると思う。
              ユーザー体験第一の開発をミッションに日本のソフトウェア開発の未来を創造していきたい。
            </p>
          </Text>
          <H2>社会に足りないものを作る</H2>
          <Text>
            <p>
              ものづくりには、需要があるからものを作る場合と、ものを作ってから需要を生み出す場合があると思う。
              後者の場合は、潜在的な需要を見出す必要があるから、ビジネス的なセンスが必要だろうけど、前者の場合は作るべきものは簡単にわかるから、作るリソースさえあれば誰でもできる。
            </p>
            <p>
              だけど、ソフトウェアの場合は需要があるけど供給が追いついていないものが、たくさんあるにもかかわらず、後者の方法で一発当てようとする人が多くいる気がする。
              今ある課題を確実に解決して、社会をより良くしていくためにも、需要はあるのにまだ足りていないものを作っていきたい。
            </p>
          </Text>
        </section>

        <section id="works">
          <H1>Works</H1>
          <div className="flex flex-col space-y-4">
            <WorkCard
              name="Tab Space"
              description="タブをワークスペースとして保存・管理することができるChromeの拡張機能。 Svelte +
                    Tailwind CSS + daisyUI で開発。
                    素早く操作するとタブが消失するバグがあるかも・・・"
              url="https://chrome.google.com/webstore/detail/tab-space/haldijfdieafjhbgbfmpkolndlpkfoin"
              image="/works/tab-space/promotion.png"
            />
          </div>
        </section>

        <section id="contact">
          <H1>Contact</H1>
          <Text>
            <p>お問い合わせは Twitter の DM よりお願いいたします。</p>
            <p>
              <span className="mr-1">Twitter:</span>
              <a
                href="https://twitter.com/kosei_28"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                @kosei_28
              </a>
            </p>
          </Text>
        </section>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
