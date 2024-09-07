import { useEffect, useState } from "react"
import Cookies from 'universal-cookie';

const ProtectedRoutesHook = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cookies = new Cookies();
    const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        const token = cookies.get('token');
        if (token) {
            if (token && token === "one-hand1234") {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } else {
            setIsAdmin(false);
        }
    }, [cookies]);

    return [isAdmin];
}

export default ProtectedRoutesHook;
