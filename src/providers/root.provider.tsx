import { FC, PropsWithChildren } from "react";
import ProductProvider from "./products.provider";
import SearchProvider from "./search.provider";
import UserProvider from "./user.provider";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ProductProvider>
            <SearchProvider>
                <UserProvider>
                    {children}
                </UserProvider>
            </SearchProvider>
        </ProductProvider>
    )
}

export default RootProvider;