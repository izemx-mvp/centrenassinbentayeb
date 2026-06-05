import i1 from "@/assets/insta-1.jpg";
import i2 from "@/assets/insta-2.jpg";
import i3 from "@/assets/insta-3.jpg";
import i4 from "@/assets/insta-4.jpg";
import i5 from "@/assets/insta-5.jpg";
import i6 from "@/assets/insta-6.jpg";

const posts = [i1, i2, i3, i4, i5, i6];

export function Instagram() {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">@nassimbentayeb</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Suivez-nous sur <em className="italic text-gradient-gold">Instagram</em>.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {posts.map((p, i) => (
            <a
              key={i}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={p}
                alt=""
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-center justify-center">
                <svg className="w-7 h-7 fill-background opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5.4a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zm0 7.2a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6zm5.6-7.4a1 1 0 11-2.1 0 1 1 0 012.1 0z"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
