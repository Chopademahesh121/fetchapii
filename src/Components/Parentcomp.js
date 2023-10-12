import Acomp from "./Acomp";
import { Nameprovider, Fullnameprovider, Passprovider, Userprovider, Lastnameprovider, Contactprovider } from "./UserContext";
const Parentcomp = () => {
    return (
        <>
            <h2>Parent comp</h2>

            <Nameprovider value="Mahesh">
                <Lastnameprovider value="Chopade">
                    <Fullnameprovider value="Mahesh Ganeshrao Chopade">
                        <Userprovider value="react@gmail.com">
                            <Passprovider value="react@123">
                                <Contactprovider value="9965232151">

                                    <Acomp />

                                </Contactprovider>
                            </Passprovider>
                        </Userprovider>
                    </Fullnameprovider>
                </Lastnameprovider>
            </Nameprovider>

        </>
    )
}
export default Parentcomp;
