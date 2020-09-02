import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { postsLoaded } from './posts-actions';
import { ofType } from 'redux-observable';

export const postsEpic = (action$) => action$.pipe(
    ofType('posts'),
    mergeMap(action =>
        ajax.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=1362c34423375d167d694489b1c74080').pipe(
            map(response => postsLoaded(response))
        )
    )
)