import Link from 'next/link';

const stats = [
  { id: 1, name: '', value: 'Whole' },
  { id: 2, name: '', value: 'Healthy' },
  { id: 3, name: '', value: 'You' },
];

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-5 text-center ">WHY with Tammy</h1>
      <div className="pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-4xl leading-7">{stat.name}</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight sm:text-6xl text-brand-500">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <h1 className="text-2xl font-bold text-center mt-8">When it comes to your health and wellness, start with your why</h1>
      </div>
      <h1 className="mt-10 pt-10 border-t-2 border-stone-600 text-center text-2xl">Tammy Pica-Dolan, ACE certified health and wellness coach and wellness enthusiast.</h1>
      <h1 className="pt-12 text-center text-xl">I work with clients on lifestyle factors such as nutrition, exercise, stress management, self care, sleep and more to achieve optimal wellness and greater quality of life.</h1>
      <div className="flex justify-center pt-24">
        <Link
          href="/discover"
          type="button"
          class="text-stone-100 bg-brand-700 hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800"
        >
          Learn More
          <svg class="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </>
  );
}
