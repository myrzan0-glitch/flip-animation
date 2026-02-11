const floorPlanImage = new URL("../floor-plan.png", import.meta.url).href;
const projectImage = new URL("../project-image.png", import.meta.url).href;

type ApartmentCardProps = {
  className?: string;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export default function ApartmentCard({ className }: ApartmentCardProps) {
  return (
    <div className={cn("w-full px-4 sm:px-0", className)}>
      <div
        tabIndex={0}
        role="button"
        aria-label="Карточка квартиры. Наведите курсор, чтобы увидеть информацию о проекте"
        className="group mx-auto w-full max-w-[320px] cursor-pointer rounded-[20px] outline-none focus-visible:ring-2 focus-visible:ring-[#3152DF] focus-visible:ring-offset-2"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative aspect-[320/378] rounded-[20px] transition-transform duration-[700ms] motion-reduce:duration-0 motion-reduce:transition-none [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]"
          style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
          <div className="absolute inset-0 inline-flex h-full w-full flex-col justify-center items-start gap-2 rounded-[20px] bg-white p-3 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.04),0px_2px_6px_0px_rgba(0,0,0,0.04),0px_16px_24px_0px_rgba(0,0,0,0.06)] [backface-visibility:hidden]">
            <div className="inline-flex self-stretch items-center justify-between px-1">
              <div className="flex-1 justify-start">
                <span className="font-['Inter'] text-base font-semibold leading-6 tracking-tight text-[#1D1D1F]">
                  1-комн. 42.44 м
                </span>
                <sup className="font-['Inter'] text-base font-semibold leading-6 tracking-tight text-[#1D1D1F]">
                  2
                </sup>
              </div>
            </div>

            <div className="relative h-56 w-full overflow-hidden rounded-xl">
              <img
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={floorPlanImage}
                alt="Планировка квартиры"
              />
              <div className="absolute left-1 top-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#3152DF] px-2 py-1">
                <div className="text-center font-['Inter'] text-xs font-medium leading-4 tracking-tight text-white">
                  Бизнес
                </div>
              </div>
            </div>

            <div className="flex self-stretch flex-col items-start justify-start gap-1 px-1">
              <div className="inline-flex w-[300px] flex-1 items-center justify-start gap-1">
                <div className="justify-start font-['Inter'] text-lg font-semibold leading-6 text-[#65C466]">
                  17 900 000 ₸
                </div>
                <div className="justify-start font-['Inter'] text-xs font-medium leading-4 tracking-tight text-[#84858C] line-through">
                  18 000 000 ₸
                </div>
              </div>
              <div className="text-center font-['Inter'] text-xs font-medium leading-4 tracking-tight text-[#4C4D52]">
                Atamura Business - 2 Ұрпақ
              </div>
              <div className="inline-flex self-stretch items-center justify-start gap-1">
                <div className="justify-center font-['Inter'] text-xs font-normal leading-4 tracking-tight text-[#4C4D52]">
                  № 321
                </div>
                <div className="justify-start font-['Inter'] text-xs font-normal leading-4 tracking-tight text-[#4C4D52]">
                  |
                </div>
                <div className="justify-center font-['Inter'] text-xs font-normal leading-4 tracking-tight text-[#4C4D52]">
                  13/16 этаж
                </div>
                <div className="justify-start font-['Inter'] text-xs font-normal leading-4 tracking-tight text-[#4C4D52]">
                  |
                </div>
                <div className="justify-center font-['Inter'] text-xs font-normal leading-4 tracking-tight text-[#4C4D52]">
                  2 подьезд
                </div>
                <div className="justify-start font-['Inter'] text-xs font-normal leading-4 tracking-tight text-[#4C4D52]">
                  |
                </div>
                <div className="justify-start font-['Inter'] text-xs font-medium leading-4 tracking-tight text-[#1D1D1F]">
                  2 кв. 2025
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 inline-flex h-full w-full flex-col items-center justify-start gap-5 rounded-[20px] bg-white px-2 pb-5 pt-2 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.04),0px_2px_6px_0px_rgba(0,0,0,0.04),0px_16px_24px_0px_rgba(0,0,0,0.06)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="relative flex-1 self-stretch overflow-hidden rounded-[20px]">
              <img
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={projectImage}
                alt="Изображение проекта Atamura Business"
              />
              <div className="absolute left-3 top-3 inline-flex items-start justify-start gap-1">
                <div className="flex items-center justify-center gap-2 rounded-lg bg-[#3152DF] px-2 py-1">
                  <div className="text-center font-['Nunito_Sans'] text-xs font-semibold leading-4 tracking-tight text-white">
                    Бизнес
                  </div>
                </div>
              </div>
            </div>

            <div className="flex self-stretch flex-col items-start justify-start gap-2 px-2">
              <div className="inline-flex self-stretch items-center justify-center gap-2.5">
                <div className="flex-1 justify-start font-['Inter'] text-lg font-semibold leading-6 text-[#1D1D1F]">
                  Atamura Business - 2 Ұрпақ
                </div>
              </div>
              <div className="line-clamp-1 self-stretch justify-start font-['Inter'] text-xs font-normal leading-4 text-[#4C4D52]">
                г. Шымкент, р-н Абайский, кв-л 189, уч. 513/4 (ранее: г.
                Шымкент, р-н Каратау, кв-л 189, уч. 513/4)
              </div>
              <div className="inline-flex content-start items-start justify-start gap-1 self-stretch flex-wrap">
                <div className="justify-start font-['Inter'] text-xs font-normal leading-4 text-[#1D1D1F]">
                  до 12 этажей
                </div>
                <div className="text-center justify-start font-['Inter'] text-xs font-normal leading-4 text-[#4C4D52]">
                  |
                </div>
                <div className="justify-start font-['Inter'] text-xs font-normal leading-4 text-[#1D1D1F]">
                  Сдача 2 кв. 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
