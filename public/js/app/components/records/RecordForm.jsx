var RecordForm = React.createClass({
    displayName: 'RecordForm',
    mixins: [Morearty.Mixin],
    handleSubmit: function (e) {
        var binding = this.getDefaultBinding(),
            record = binding.get('record');
        if(record.get('id'))
            this.updateRecord(record);
        else
            this.addRecord(record);
        this.clearForm();
        e.preventDefault();
    },
    updateRecord: function (record) {
        RecordActions.edit(record);
    },
    addRecord: function (record) {
        RecordActions.add(record);
    },
    clearForm: function () {
        var binding = this.getDefaultBinding();
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
                <CategorySelect categories={categoriesBinding.get()} selectedCategory={record.get('category_id')} binding={recordBinding}/>
                <GenericInput label="Amount" type="number" id="amount" binding={recordBinding}/>
                <GenericTextarea label="Description" id="description" binding={recordBinding}/>
                <UserPicker users={usersBinding.get()} binding={recordBinding}/>
                <div className="btn-toolbar">
                    <button type="submit" className="btn btn-primary">{record.get('id') ? 'Update' : 'Save'}</button>
                    <button type="button" className="btn btn-warning" onClick={this.clearForm}>{record.get('id') ? 'Cancel' : 'Reset'}</button>
                </div>
            </form>
        );
    }
});