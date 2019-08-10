import {createAppContainer, createStackNavigator} from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search'
        }
    }
);

export default createAppContainer(navigator);