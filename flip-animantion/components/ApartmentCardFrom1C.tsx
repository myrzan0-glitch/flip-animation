type OneCApartmentRecord = {
  uuid: string;
  name?: string;
  roomCount?: number;
  square?: number | string;
  totalPrice?: number | string;
  totalPriceWithDiscount?: number | string;
  floor?: number | string;
  maxFloor?: number | string;
  entrance?: number | string;
  deadLine?: string;
  blockName?: string;
  realEstateName?: string;
  blockAddress?: string;
  propertyClassName?: string[];
  photoURL?: string;
  photoURL200?: string;
  photoURL400?: string;
  photoURL1600?: string;
};

type ApartmentCardData = {
  title: string;
  badge: string;
  floorPlanImageUrl: string;
  projectImageUrl: string;
  currentPriceText: string;
  originalPriceText: string;
  projectName: string;
  footerLine: string;
  addressText: string;
  projectMetaText: string;
};

type ApartmentCardFrom1CProps = {
  data: ApartmentCardData;
  className?: string;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const formatPrice = (value: number | string | undefined, currency = "₸") => {
  if (value === undefined || value === null || value === "") return `0 ${currency}`;
  if (typeof value === "string") return value;
  return `${value.toLocaleString("ru-RU")} ${currency}`;
};

const formatQuarterFromDate = (value?: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const quarter = Math.floor(date.getUTCMonth() / 3) + 1;
  const year = date.getUTCFullYear();
  return `${quarter} кв. ${year}`;
};

export const map1CToApartmentCardData = (record: OneCApartmentRecord): ApartmentCardData => {
  const currency = "₸";
  const area = record.square !== undefined ? `${record.square}` : "-";
  const rooms = record.roomCount !== undefined ? `${record.roomCount}` : "-";
  const title = `${rooms}-комн. ${area} м2`;
  const badgeFromProjectClass = Array.isArray(record.propertyClassName)
    ? record.propertyClassName[0]
    : undefined;
  const completionFromDate = formatQuarterFromDate(record.deadLine);
  const floorsText = record.maxFloor !== undefined ? `до ${record.maxFloor} этажей` : "";
  const completionText = completionFromDate ? `Сдача ${completionFromDate}` : "";

  const footerLine = [
    `№ ${record.name ?? "-"}`,
    `${record.floor ?? "-"}/${record.maxFloor ?? "-"} этаж`,
    `${record.entrance ?? "-"} подьезд`,
    completionFromDate || "-",
  ].join(" | ");

  const currentPrice = record.totalPriceWithDiscount ?? record.totalPrice;
  const originalPrice = record.totalPrice ?? record.totalPriceWithDiscount;
  const projectName = record.realEstateName || record.blockName || "Apartment Project";
  const imageUrl =
    record.photoURL400 || record.photoURL1600 || record.photoURL || record.photoURL200 || "";

  return {
    title,
    badge: badgeFromProjectClass || "Бизнес",
    floorPlanImageUrl: imageUrl,
    projectImageUrl: imageUrl,
    currentPriceText: formatPrice(currentPrice, currency),
    originalPriceText: formatPrice(originalPrice, currency),
    projectName,
    footerLine,
    addressText: record.blockAddress || "",
    projectMetaText: [floorsText || "до 12 этажей", completionText || "Сдача 2 кв. 2026"]
      .filter(Boolean)
      .join(" | "),
  };
};

export default function ApartmentCardFrom1C({ data, className }: ApartmentCardFrom1CProps) {
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
              <div className="flex-1 justify-start font-['Inter'] text-base font-semibold leading-6 tracking-tight text-[#1D1D1F]">
                {data.title}
              </div>
            </div>

            <div className="relative h-56 w-full overflow-hidden rounded-xl">
              {data.floorPlanImageUrl ? (
                <img
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  src={data.floorPlanImageUrl}
                  alt="Планировка квартиры"
                />
              ) : null}
              <div className="absolute left-1 top-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#3152DF] px-2 py-1">
                <div className="text-center font-['Inter'] text-xs font-medium leading-4 tracking-tight text-white">
                  {data.badge}
                </div>
              </div>
            </div>

            <div className="flex self-stretch flex-col items-start justify-start gap-1 px-1">
              <div className="inline-flex w-[300px] flex-1 items-center justify-start gap-1">
                <div className="justify-start font-['Inter'] text-lg font-semibold leading-6 text-[#65C466]">
                  {data.currentPriceText}
                </div>
                <div className="justify-start font-['Inter'] text-xs font-medium leading-4 tracking-tight text-[#84858C] line-through">
                  {data.originalPriceText}
                </div>
              </div>
              <div className="text-center font-['Inter'] text-xs font-medium leading-4 tracking-tight text-[#4C4D52]">
                {data.projectName}
              </div>
              <div className="inline-flex self-stretch items-center justify-start gap-1 font-['Inter'] text-xs font-normal leading-4 tracking-tight text-[#4C4D52]">
                {data.footerLine}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 inline-flex h-full w-full flex-col items-center justify-start gap-5 rounded-[20px] bg-white px-2 pb-5 pt-2 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.04),0px_2px_6px_0px_rgba(0,0,0,0.04),0px_16px_24px_0px_rgba(0,0,0,0.06)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="relative flex-1 self-stretch overflow-hidden rounded-[20px]">
              {data.projectImageUrl ? (
                <img
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  src={data.projectImageUrl}
                  alt="Изображение проекта"
                />
              ) : null}
              <div className="absolute left-3 top-3 inline-flex items-start justify-start gap-1">
                <div className="flex items-center justify-center gap-2 rounded-lg bg-[#3152DF] px-2 py-1">
                  <div className="text-center font-['Nunito_Sans'] text-xs font-semibold leading-4 tracking-tight text-white">
                    {data.badge}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex self-stretch flex-col items-start justify-start gap-2 px-2">
              <div className="inline-flex self-stretch items-center justify-center gap-2.5">
                <div className="flex-1 justify-start font-['Inter'] text-lg font-semibold leading-6 text-[#1D1D1F]">
                  {data.projectName}
                </div>
              </div>
              <div className="line-clamp-1 self-stretch justify-start font-['Inter'] text-xs font-normal leading-4 text-[#4C4D52]">
                {data.addressText}
              </div>
              <div className="inline-flex content-start items-start justify-start gap-1 self-stretch flex-wrap font-['Inter'] text-xs font-normal leading-4 text-[#1D1D1F]">
                {data.projectMetaText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
