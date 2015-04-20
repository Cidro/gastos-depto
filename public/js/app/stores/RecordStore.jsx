var RecordActions = Reflux.createActions([
    'add', 'edit', 'remove', 'undo'
]);

var RecordStore = Reflux.createStore({
    listenables: RecordActions,
    syncingPool: [],

    init: function () {
        this.rootBinding = this.getMoreartyContext().getBinding();
        this.recordBinding = this.rootBinding.get('record');
    },

    onAdd: function (record) {
        var index = null;
        //Quick browser update
        this.rootBinding.update('records', function (records) {
            records = records.push(record);
            index = records.size - 1;
            return records;
        });
        //Update on the backend
        console.log('add', index);
        this.syncRecord(index, record);
    },

    onEdit: function (record) {
        console.log('edit', record);
    },

    onRemove: function (index) {
        this.updateStatus(index, 'deleted');
        console.log('remove', index);
    },

    onUndo: function (index) {
        this.updateStatus(index, 'active');
        console.log('undo', index);
    },

    updateStatus: function (index, status) {
        var updatedRecord = null;
        this.rootBinding.update('records', function (records) {
            records = records.update(index, function (record) {
                updatedRecord = record.merge({
                    status: status,
                    synced: false
                });
                return updatedRecord;
            });
            return records;
        })
        this.syncRecord(index, updatedRecord);
    },

    syncRecord: function (index, record) {
        var data = record.toObject();
        var request = $.ajax({
            url: 'records',
            dataType: 'json',
            contentType: 'json',
            method: 'post',
            data: JSON.stringify(data)
        });
        request.success((newRecord) => {
            this.rootBinding.update('records', function (records) {
                return records.set(
                    index,
                    records
                        .get(index)
                        .update((record) => {
                            return record.map((value, key) => {
                                return newRecord[key];
                            });
                        })
                );
            });
        });
    }
});