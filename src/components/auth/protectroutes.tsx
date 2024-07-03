// components/withAuth.tsx
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const router = useRouter();
    const userDetails = useSelector((state: RootState) => state.userDetails.userDetails);

    useEffect(() => {
      if (!userDetails.email) {
        router.push("/login");
      }
    }, [userDetails, router]);

    return userDetails.email ? <WrappedComponent {...props} /> : null;
  };

// ComponentWithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithAuth;
};

export default withAuth;
