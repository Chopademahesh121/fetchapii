import { createContext } from "react";

const UserContext=createContext();
const Userprovider=UserContext.Provider;
const Userconsumer=UserContext.Consumer;

const Passcontext=createContext();
const Passprovider=Passcontext.Provider;
const Passconsumer=Passcontext.Consumer;

const Fullnamecontext=createContext();
const Fullnameprovider=Fullnamecontext.Provider;
const Fullnameconsumer=Fullnamecontext.Consumer;

const Namecontext=createContext();
const Nameprovider=Namecontext.Provider;
const Nameconsumer=Namecontext.Consumer;

const Lastname=createContext();
const Lastnameprovider=Lastname.Provider;
const Lastnameconsumer=Lastname.Consumer;

const Contact=createContext();
const Contactprovider=Contact.Provider;
const Contactconsumer=Contact.Consumer;

export{Userprovider,Userconsumer,Passprovider,Passconsumer,Fullnameprovider,Fullnameconsumer,Nameprovider,Nameconsumer,Lastnameprovider,Lastnameconsumer,Contactprovider,Contactconsumer}