import React from "react";
import ModalsLayout from "../modalsLayout";
import { Button } from "@/components/common/button";
import Link from "@/components/custom/link";
import CustomIcons from "@/components/custom/customIcons";
import { useState } from "react";
import DataForm from "./dataForm";
import DataDetails from "./dataDetails";
import DataPayment from "./payment";
import PurchaseDetails from "./dataPurchaseDetails";
type dataProps = {
  name: string;
  network: string;
};

const Data = ({ setShow, show }: any) => {
  const [flow, setFlow] = useState(0);
  const [error, setError] = useState<any>({});
  const [data, setData] = useState<dataProps>({ name: "", network: "" });
  const [pseudo, setpseudoUpdate] = useState("");

  const flowHeaders: string[] = [
    "Data Bundle",
    "Data Bundle",
    "Your Order",
    "Your Wallet",
    "Purchase Details",
  ];

  return (
    <ModalsLayout
      flow={flow}
      setFlow={setFlow}
      header={flowHeaders[flow]}
      setShow={setShow}
      show={show}
    >
      {flow === 1 ? (
        <DataForm
          setFlow={setFlow}
          data={data}
          setpseudoUpdate={setpseudoUpdate}
          pseudo={pseudo}
        />
      ) : flow === 2 ? (
        <DataDetails
          setFlow={setFlow}
          data={data}
          setpseudoUpdate={setpseudoUpdate}
          pseudo={pseudo}
        />
      ) : flow === 3 ? (
        <DataPayment setFlow={setFlow} data={data} pseudo={pseudo} />
      ) : flow === 4 ? (
        <PurchaseDetails setFlow={setFlow} data={data} pseudo={pseudo} />
      ): (
        <>
          <header className="font-normal text-[20px] font-OpenSans">
            Choose A Service Provider
          </header>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {[
              { id: 0, network: "mtn", name: "MTN" },
              { id: 1, network: "airtel", name: "Airtel" },
              { id: 2, network: "9mobile", name: "9mobile" },
              { id: 3, network: "glo", name: "GLO" },
            ].map((item: { id: number; network: string; name: string }) => (
              <button
                key={item.id}
                onClick={() => {
                  return (
                    setFlow(1),
                    setData({ ...data, network: item.network, name: item.name })
                  );
                }}
                // className={"  hover:border-2 border-[#3D3066] rounded"}
              >
                <CustomIcons
                  src={`/images/airtime/${item.network}.png`}
                  alt={item.network}
                />
              </button>
            ))}
            {error?.network ? (
              <p className="mt-2 text-[12px] text-red-400">{error?.network}</p>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </ModalsLayout>
  );
};

export default Data;
