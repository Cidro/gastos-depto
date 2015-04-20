var RecordListRowActions = React.createClass({
    displayName: 'RecordListRowActions',
    mixins: [Morearty.Mixin],
    handleClick: function (e) {
        if(e.target.value == 'delete')
            RecordActions.remove(this.props.index);
        if(e.target.value == 'undo')
            RecordActions.undo(this.props.index);
        if(e.target.value == 'edit')
            this.props.onEdit(this.props.index),
        e.preventDefault();
    },
    render: function () {
        var binding = this.getDefaultBinding(),
            record = binding.get(this.props.index);

        var renderActions = function () {
            var actions = null;
            if(record.get('status') == 'deleted'){
                actions = (<div className="btn-toolbar">
                    <button value="undo" className="btn btn-xs btn-warning">Undo</button>
                </div>);
            } else {
                actions = (<div className="btn-toolbar">
                    <button value="edit" className="btn btn-xs btn-primary">Edit</button>
                    <button value="delete" className="btn btn-xs btn-danger">Delete</button>
                </div>);
            }
            return actions;
        }

        return (
            <div className="record-actions" onClick={this.handleClick}>
                {renderActions()}
            </div>
        );
    }
});