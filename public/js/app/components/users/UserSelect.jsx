var UserSelect = React.createClass({
    displayName: 'UserSelect',
    mixins: [Morearty.Mixin],
    handleChange: function (e) {
        var binding = this.getDefaultBinding(),
            value = e.target.value;
        binding.set('user_id', parseInt(value, 10));
    },
    render: function(){
            var users = this.props.users,
            selectedUser = this.props.selectedUser || '';

        var renderUsersOption = function(user, id){
            return (
                <option value={user.get('id')}  key={user.get('id')}>{user.get('username')}</option>
            );
        };
        return (
            <div className="form-group">
                <label htmlFor="user">Owner</label>
                <select name="user" id="user" className="form-control" value={selectedUser} onChange={this.handleChange}>
                    <option value=""> - - </option>
                    {users.map(renderUsersOption).toArray()}
                </select>
            </div>
        );
    }
});