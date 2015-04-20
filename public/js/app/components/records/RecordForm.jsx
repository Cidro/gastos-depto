var RecordForm = React.createClass({
    displayName: 'RecordForm',
    mixins: [Morearty.Mixin],
    handleSubmit: function (e) {
        var binding = this.getDefaultBinding(),
            record = binding.get('record');
        this.addRecord(record);
        e.preventDefault();
    },
    addRecord: function (record) {
        var binding = this.getDefaultBinding();
        RecordActions.add(record);
        binding.update('record', function(){
            return emptyRecord;
        });
    },
    render: function () {
        var binding = this.getDefaultBinding(),
            recordBinding = binding.sub('record'),
            usersBinding = binding.sub('users'),
            categoriesBinding = binding.sub('categories'),
            record = recordBinding.get();

        return (
            <form className="record-form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <UserSelect users={usersBinding.get()} selectedUser={record.get('user_id')} binding={recordBinding}/>
                <CategorySelect categories={categoriesBinding.get()} binding={recordBinding}/>
                <GenericInput label="Amount" type="number" id="amount" binding={recordBinding}/>
                <GenericTextarea label="Description" id="description" binding={recordBinding}/>
                <UserPicker users={usersBinding.get()} binding={recordBinding}/>
                <button type="submit" className="btn btn-primary">Grabar</button>
            </form>
        );
    }
});