
/* import { Fullnameconsumer, Userconsumer, Passconsumer, Nameconsumer, Lastnameconsumer, Contactconsumer } from './UserContext'; */

import { useContext } from "react";
import { Contactconsumer, Fullnameconsumer, Lastnameconsumer, Nameconsumer, Passconsumer, Userconsumer } from "./UserContext";

const Ecomp=()=>{
    const Name=useContext(Nameconsumer);
    const Username=useContext(Userconsumer);
    const  FullName=useContext(Fullnameconsumer);
    const LastName=useContext(Lastnameconsumer);
    const Password=useContext(Passconsumer);
    const Contact=useContext(Contactconsumer)


    
    return(
        <>
        <h2>I am Echild</h2>
        <h2>
        Name-{Name}<br/>Username-{Username}<br/>FullName-{FullName}<br/>LastName-{LastName}<br/>Password-{Password}<br/>Contacts-{Contact}
        </h2>
        </>
    )
}
export default Ecomp;

/* const Ecomp = () => {
    return (
        <>
            <h2>Ecomp</h2>

              <Userconsumer>
                {
                    user => {
                        return (
                            <>
                                <Passconsumer>
                                    {
                                        pass => {
                                            return (
                                                <>
                                                    <Fullnameconsumer>
                                                        {
                                                            fname => {
                                                                return (
                                                                    <>
                                                                        <Nameconsumer>
                                                                            {
                                                                                name => {
                                                                                    return (
                                                                                        <>
                                                                                            <Lastnameconsumer>
                                                                                                {
                                                                                                    last => {
                                                                                                        return (
                                                                                                            <>
                                                                                                                <Contactconsumer>
                                                                                                                    {
                                                                                                                        contact => {
                                                                                                                            return (
                                                                                                                                <>
                                                                                                                                    <h2>Name-{name}<br /> LastName-{last}<br />FullName-{fname}<br />Username-{user}<br /> Password-{pass},<br />Contact-{contact}</h2>
                                                                                                                                </>
                                                                                                                            )
                                                                                                                        }
                                                                                                                    }
                                                                                                                </Contactconsumer>

                                                                                                            </>
                                                                                                        )
                                                                                                    }
                                                                                                }
                                                                                            </Lastnameconsumer>

                                                                                        </>
                                                                                    )
                                                                                }
                                                                            }

                                                                        </Nameconsumer>

                                                                    </>
                                                                )
                                                            }
                                                        }
                                                    </Fullnameconsumer>

                                                </>
                                            )
                                        }
                                    }
                                </Passconsumer>

                            </>
                        )
                    }
                }
            </Userconsumer>


        </>
    )
}
export default Ecomp; */

