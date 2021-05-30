import { Ihits } from './ihits';
import { Iartists } from './iartists';
import { Itrack } from './itrack';

export interface Itracks {
    tracks?: {
        // hits: [{track: Itrack}],
        // artists: Iartists
        hits: Ihits[],
    }
}
