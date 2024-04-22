import { faBathtub, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

export const PropertyCard = ({
  title,
  destination,
  image,
  bedrooms,
  bathrooms,
  price,
  hasParking,
  petFriendly,
}) => {
  return <Link 
    href={destination}
    className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200"
  >
    <div className="flex w-full relative h-48">
      <Image src={image} fill style={{objectFit: "cover"}} alt=""/>
    </div>
    <div className="mt-3 text-lg font-bold">
      {title}
    </div>
    <div className="text-lg">
      ${numeral(price).format("0,0")}
    </div>
    <div className="flex justify-between text-sm mt-3 gap-2">
      <div className="flex-1">
        <FontAwesomeIcon icon={faBathtub} />
        <span className="pl-2">{bathrooms} bathroom{bathrooms > 1 ? 's' : ''}</span>
      </div>
      <div className="flex-1">
        <FontAwesomeIcon icon={faBed} />
        <span className="pl-2">{bedrooms} bathroom{bedrooms > 1 ? 's' : ''}</span>
      </div>
    </div>
    {(!!hasParking || !!petFriendly) && (
        <div className="flex text-sm mt-3 justify-between gap-2">
          {!!hasParking && <div className="flex-1">
            <FontAwesomeIcon icon={faCar} />
            <span className="pl-2">Parking Available</span>
          </div>}
          {!!petFriendly && <div className="flex-1">
            <FontAwesomeIcon icon={faDog} />
            <span className="pl-2">Pet friendly</span>
          </div>}
        </div>
      )}
  </Link>;
};
