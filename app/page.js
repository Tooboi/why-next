import Link from "next/link";

const stats = [
  { id: 1, name: '', value: 'Whole' },
  { id: 2, name: '', value: 'Healthy' },
  { id: 3, name: '', value: 'You' },
];

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-5 text-center mt-8">WHY with Tammy</h1>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-4xl leading-7">{stat.name}</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight sm:text-6xl text-brand-500">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <h1 className="text-2xl font-bold text-center mt-8">When it comes to your health and wellness, start with your why</h1>
      </div>
      <h1 className="mt-10 pt-10 border-t-2 border-stone-600 text-center text-2xl">Tammy Pica-Dolan, ACE certified health and wellness coach and wellness enthusiast.</h1>
      <h1 className="pt-12 text-center text-xl">I work with clients on lifestyle factors such as nutrition, exercise, stress management, self care, sleep and more to achieve optimal wellness and greater quality of life.</h1>
      <div className="flex justify-center pt-24">
        <Link href="/discover" type="button" class="text-stone-100 bg-brand-700 hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800">
          Learn More
          <svg class="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>

      {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-stone-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-stone-50 px-3 py-1.5 font-medium text-stone-600 hover:bg-stone-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-stone-900 group-hover:text-stone-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-stone-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-stone-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-stone-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-stone-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div> */}
    </>
  );
}
