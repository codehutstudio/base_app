
import {createElement, forwardRef} from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DirectionsIcon from '@mui/icons-material/Directions';
import MapIcon from '@mui/icons-material/Map';
import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SaveIcon from '@mui/icons-material/Save';
import {ArrowBack, Error, Warning} from '@mui/icons-material';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';

const Icons = forwardRef((props: any, ref: any): any => {
    const {icon, ...rest} = props
  switch (icon) {
    case 'user':
      return createElement(PersonIcon, {...rest, ref});
    case 'database':
      return createElement(StorageIcon, {...rest, ref});
    case 'group':
      return createElement(GroupIcon, {...rest, ref});
    case 'directions':
      return createElement(DirectionsIcon, {...rest, ref});
    case "view":
    case 'eye':
      return createElement(VisibilityIcon, {...rest, ref});
    case 'map':
      return createElement(MapIcon, {...rest, ref});
    case 'menu':
      return createElement(MenuIcon, {...rest, ref});
    case 'filter':
      return createElement(FilterAltIcon, {...rest, ref});
    case 'filterOff':
      return createElement(FilterAltOffIcon, {...rest, ref});
    case 'search':
      return createElement(SearchIcon, {...rest, ref});
    case 'clear':
      return createElement(HighlightOffIcon, {...rest, ref});
    case 'list':
      return createElement(FormatListBulletedIcon, {...rest, ref});
    case 'edit':
      return createElement(ModeEditIcon, {...rest, ref});
    case 'back':
      return createElement(ArrowBack, {...rest, ref});
    case 'error':
      return createElement(Error, {...rest, ref});
    case 'warn':
      return createElement(Warning, {...rest, ref});
    case 'dashbord':
      return createElement(DashboardIcon, {...rest, ref});
    case 'save':
      return createElement(SaveIcon, {...rest, ref});
  }
});

export default Icons

