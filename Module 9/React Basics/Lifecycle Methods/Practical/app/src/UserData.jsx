import React, { Component } from "react";

class UserData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount() {
    // API call after component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h2>User Data</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default UserData;