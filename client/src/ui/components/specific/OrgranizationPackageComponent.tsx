import { useEffect } from "react";
import { useGetOrganizationPackages } from "../../../services/OrgranizationPackage";
import { CarouselItemProps } from "../common/organization-container/CarouselItem";
import CommonContainerComponent from "../common/organization-container/CommonContainer";
import { Colors } from "./Colors";
import { PackageItemContainer, PackageDescription, PackagePrice, PackageTitle, PackageGetButton, PackageTextContainer, PackageCategories, PackageCategoriesInner } from "./Styled";

const OrgranizationPackageComponent: React.FC = () => {
    const { data: packages, isLoading, isError } = useGetOrganizationPackages();
    packages?.map((pkg) => {
        pkg.OrganizationPackageCategories.map((cat: any) => {
            console.log(cat.OrganizationPackageCategoryName.name)
        });
    });

    const items: CarouselItemProps[] = !packages || isError ? [] : packages?.map((pkg, index) => ({
        content: (
            isLoading ? <p>Loading...</p> : 
            <PackageItemContainer color={Colors[index % 4]}>
                <PackageTextContainer>
                    <PackageTitle style={{paddingBottom: 16}}>{pkg.name}</PackageTitle>
                    <PackageDescription style={{paddingBottom: 8}}>{pkg.description}</PackageDescription>
                    <PackageCategories style={{paddingBottom: 12}}>
                       {pkg.OrganizationPackageCategories.map((cat: any) => {
                            return (<PackageCategoriesInner>
                                {cat.OrganizationPackageCategoryName.name}
                            </PackageCategoriesInner>)
                        })}
                    </PackageCategories>
                    <PackagePrice>${Number(pkg.price).toFixed(2)}/mo</PackagePrice>
                </PackageTextContainer>
                <PackageGetButton color={Colors[index % 4]}>Get {pkg.name}</PackageGetButton>
            </PackageItemContainer> 
        )
    }));

    const title = "Packages and offers";
    const initialIndex = 0;
    const visibleCount = 4;

    return (
        <CommonContainerComponent 
            title={title}
            items={items}
            initialIndex={initialIndex}
            visibleCount={visibleCount}
        />
    );
};

export default OrgranizationPackageComponent;