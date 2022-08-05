import styles from "../../styles/LandingPage/LandingPage.style";
import surfAppLogo from "../../../assets/images/logo/logoSurfApp.png";
import { Image, Text, TouchableOpacity } from "react-native";


export default function Header(props) {
    const { displayLoginForm } = props;
    return (
        <TouchableOpacity style={styles.returnButton} onPress={() => displayLoginForm()}>
            <Image style={styles.image} source={surfAppLogo} />
            <Text style={styles.title}>Surf App</Text>
        </TouchableOpacity>
    );
}