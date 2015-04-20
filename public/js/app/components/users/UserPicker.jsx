var UserPicker = React.createClass({
    displayName: 'UserPicker',
    mixins: [Morearty.Mixin],
    handleChange: function(e){
        var binding = this.getDefaultBinding(),
            userId = parseInt(e.target.value);
        if(e.target.checked)
            this.addUser(binding, userId);
        else
            this.removeUser(binding, userId);
    },
    addUser: function(binding, userId){
        binding.update('users', function(users){
            return users.push(parseInt(userId));
        });
    },
    removeUser: function(binding, userId){
        binding.update('users', function(users){
            return users.delete(users.indexOf(userId));
        });
    },
    render: function () {
        var binding = this.getDefaultBinding(),
            record = binding.get(),
            users = this.props.users,
            checkedUsers = record.get('users');

        checkedUsers = (checkedUsers instanceof Array) ? [] : checkedUsers.toArray();

        var renderUsersCheckbox = function(user, id){
            var checked = checkedUsers.indexOf(parseInt(user.get('id'))) >= 0;
            return (
                <div key={user.get('id')} className="checkbox">
                    <label>
                        <input defaultChecked={checked} type="checkbox" name="selectedUsers[]" value={user.get('id')} /> {user.get('username')}
                    </label>
                </div>
            );
        };
        return(
            <div className="form-group" onChange={this.handleChange}>
                <label htmlFor="users">Users</label>
                {users.map(renderUsersCheckbox).toArray()}
            </div>
        );
    }
});