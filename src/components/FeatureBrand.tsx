import { FC } from 'react';

type FeaturedBrandProps = {
    brand: {
        title: string;
        image: string;
    }
}

const FeatureBrand: FC<FeaturedBrandProps> = ({ brand }) => {
    return (
        <div className="card bg-white rounded-md shadow-lg">
            <div className="card-body max-h-60 max-w-full">
        <img src={brand.image} alt={brand.title} className="object-contain w-full h-full" />
      </div>
        </div>
    );
}
export default FeatureBrand;