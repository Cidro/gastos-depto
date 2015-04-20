var RecordList = React.createClass({
    displayName: 'RecordList',
    mixins: [Morearty.Mixin],
    _onRecordEdit: function (index) {
        this.props.onRecordEdit(index);
    },
    render: function(){
        var binding = this.getDefaultBinding(),
            records = binding.get('records'),
            users = binding.get('users'),
            categories = binding.get('categories');

        var emptyRecordsRow = function () {
            return (
                <tr>
                    <th className="text-center" colSpan="7">No Records Found</th>
                </tr>
            );
        }.bind(this);

        var renderRecords = function (record, i) {
            return <RecordListRow onRecordEdit={this._onRecordEdit} binding={binding.sub('records')} record={record} index={i} users={users} categories={categories} key={i} />;
        }.bind(this);

        var recordRows = records.size ? records.map(renderRecords) : emptyRecordsRow();

        return(
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Owner</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recordRows}
                    </tbody>
                </table>
            </div>
        );
    }
});