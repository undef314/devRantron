import React from 'react';
import Collabs from '../containers/feeds/collabs';
import Rants from '../containers/feeds/rants';
import Stories from '../containers/feeds/stories';
import Weekly from '../containers/feeds/weekly';
import ROUTES from '../consts/routes';


function Feed(props) {
  let activeFeed = <Rants key={ROUTES.main.rants} />;
  switch (props.match.url) {
    case ROUTES.main.stories:
      activeFeed = <Stories key={props.match.url} />;
      break;
    case ROUTES.main.collabs:
      activeFeed = <Collabs key={props.match.url} />;
      break;
    case ROUTES.main.weekly:
      activeFeed = <Weekly key={props.match.url} />;
      break;
    default:
      activeFeed = <Rants key={props.match.url} />;
  }
  return (
    <div className="main_container row">
      <div className="row" style={{ visibility: 'hidden', position: 'absolute', maxWidth: '900px', width: '100%' }} >
        <div className="rants col s6" id="fakeRant" style={{ visibility: 'hidden' }} >
          <div id="hiddenRant" style={{ visibility: 'hidden' }} />
        </div>
        <div className="rants col s6" id="fakeRant" style={{ visibility: 'hidden' }} >
          <div style={{ visibility: 'hidden' }} />
        </div>
      </div>
      { activeFeed }
    </div>
  );
}

Feed.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Feed;
