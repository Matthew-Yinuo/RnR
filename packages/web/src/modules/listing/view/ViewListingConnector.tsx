import * as React from "react";
import { ViewListing } from "@airbnb/controller";
import { RouteComponentProps, Link } from "react-router-dom";
import { Button } from "antd";
export class ViewListingConnector extends React.PureComponent<
  RouteComponentProps<{
    listingId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;
    return (
      <ViewListing listingId={listingId}>
        {data => {
          console.log(data);
          if (!data.listing) {
            return <div>...loading</div>;
          }

          return (
            <div className="details">
              <div className="card">
                <div className="thumbnail">
                  <img className="left" src={data.listing.pictureUrl} />
                </div>
                <div className="right">
                  <h1>{data.listing.name}</h1>
                  <div className="author">
                    <h2> {data.listing.owner.email}</h2>
                  </div>
                  <div className="separator" />
                  <p>
                    {data.listing.description}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <h5>12</h5>
                <h6>JANUARY</h6>
                <ul>
                  <li className="fas fa-2x">
                    {data.listing.beds} <i className="fas fa-bed " />
                  </li>
                  <li className="fas fa-2x">
                    {data.listing.guests} <i className="fas fa-user" />
                  </li>
                  <li className="fas fa-2x">
                    <i className="fas fa-dollar-sign ">{data.listing.price}</i>
                  </li>
                </ul>
                <div className="fab">
                  <i className="fas fa-check fa-3x" />
                </div>
              </div>
              <div className="links">
                <Link to={`/listing/${listingId}/chat`}>
                  <Button type="primary" block={true} className="chat">
                    <i className="fas fa-comments fa-2x" /> Chat with the host
                  </Button>
                </Link>
              </div>
              <div className="links">
                <Link to={`/listing/${listingId}/edit`}>
                  <Button type="dashed" block={true} className="chat">
                    <i className="fas fa-edit fa-2x" /> Make changes to listing
                  </Button>
                </Link>
              </div>
            </div>
          );
        }}
      </ViewListing>
    );
  }
}
