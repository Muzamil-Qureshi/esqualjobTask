import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
const styles = StyleSheet.create({
    main: { justifyContent: 'center', alignItems: 'center', height: '100%' },
    bottomTab: {
        width: 50,
        height: 4,
        backgroundColor: 'green',
        position: 'absolute',
        top: 0,
    },
});
export default styles;