var RecordListRow = React.createClass({
    displayName: 'RecordListRow',
    mixins: [Morearty.Mixin],
    _onRecordEdit: function(index){
        this.props.onRecordEdit(index);
    },
    render: function () {
        var binding = this.getDefaultBinding(),
            records = binding.get(),
            index = this.props.index,
            record = records.get(index),
            user_id = record.get('user_id'),
            category_id = record.get('category_id');

        var getValueFromCollection = function(collection, id, value){
            var item = collection.find(function (item) {
                return item.get('id') == id;
            });
            return item ? item.get(value) : '';
        };

        var getRowStatus = function(record){
            var statusClasses = [];
            statusClasses.push(!record.get('synced') ? 'un-synced' : 'synced')
            statusClasses.push(record.get('status'));
            console.log(statusClasses);
            return statusClasses.join(' ');
        };

        var username = getValueFromCollection(this.props.users, user_id, 'username'),
            category = getValueFromCollection(this.props.categories, category_id, 'name'),
            status = getRowStatus(record);

        return(
            <tr className={status}>
                <td>{record.get('id')}</td>
                <td>{username}</td>
                <td>{category}</td>
                <td>{record.get('description')}</td>
                <td>{record.get('amount')}</td>
                <td><RecordListRowActions onEdit={this._onRecordEdit} binding={binding} index={index}/></td>
                <td className="text-center"><i className="fa-spin record-status"></i></td>
            </tr>
        )
    }
});