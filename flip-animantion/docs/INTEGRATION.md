# Integration Guide (Frontend Team)

## Production File

Use:

- `components/ApartmentCardFrom1C.tsx`

This file includes:

- Data contract type for 1C payload (`OneCApartmentRecord`)
- Mapping function (`map1CToApartmentCardData`)
- Render component (`ApartmentCardFrom1C`)

## Minimal Usage

```tsx
import ApartmentCardFrom1C, {
  map1CToApartmentCardData,
} from "./components/ApartmentCardFrom1C";

const recordFromApi = await fetch(...).then((r) => r.json());
const cardData = map1CToApartmentCardData(recordFromApi);

return <ApartmentCardFrom1C data={cardData} />;
```

## Expected 1C Fields (Apartment Payload)

Main fields used by mapper:

- `uuid`
- `name`
- `roomCount`
- `square`
- `totalPrice`
- `totalPriceWithDiscount`
- `floor`
- `maxFloor`
- `entrance`
- `deadLine`
- `blockName`
- `realEstateName`
- `blockAddress`
- `propertyClassName`
- `photoURL`
- `photoURL200`
- `photoURL400`
- `photoURL1600`

## Animation Behavior

- Flip trigger: hover/focus
- Axis: Y (`rotateY(180deg)`)
- Timing: `700ms` cubic-bezier
- Uses `preserve-3d` and `backface-visibility`

## Important

- `components/ApartmentCard.tsx` is static (design snapshot).
- `components/ApartmentCardFrom1C.tsx` is the integration target.
