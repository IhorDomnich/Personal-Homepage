import { all } from 'redux-saga/effects';
import { personslHomepageSaga } from '../features/PersonalHomepage';

export default function* saga() {
    yield all([
        personslHomepageSaga(),
    ]);
}