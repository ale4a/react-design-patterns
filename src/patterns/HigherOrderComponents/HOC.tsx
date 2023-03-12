import React, { useState, useEffect } from "react";

export const HOC = (DPContainer) => {
  return function LoadingPerson() {
    const [loading, setLoading] = useState(true);
    const handleLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    useEffect(() => {
      handleLoading();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }
    return <DPContainer />;
  };
};
