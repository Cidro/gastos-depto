/**
 * @type {}
 */
var emptyRecord = Immutable.Map({
    'id': null,
    'user_id': null,
    'category_id': null,
    'amount': 0,
    'description': '',
    'users': [],
    'status': 'active',
    'index': null,
    'synced': false
});
/**
 * State of the app
 * @type {}
 */
var state = {
    users: Users,
    records: [],
    record: emptyRecord,
    categories: Categories
};

/**
 * Morearty context with the initalState of the app
 * @type {Context}
 */
var Ctx = Morearty.createContext({initialState: state});

/**
 * Add morearty context as a store to reaflux
 * @returns {Context}
 */
Reflux.StoreMethods.getMoreartyContext = function() {
    return Ctx;
};


var App = React.createClass({
    displayName: 'GastosDepto',
    mixins: [Morearty.Mixin],

    componentWillMount: function(){
    },

    _onRecordEdit: function (index) {
        var binding = this.getDefaultBinding();
        binding.update('record', function(record){
            var toEditRecord = binding.get('records').get(index);
            toEditRecord.set('index', index);
            return toEditRecord;
        });
    },

    render: function(){
        var binding = this.getDefaultBinding(),
            record = binding.sub('record').get();

        var renderRecordTitle = function () {
            if(record.get('id'))
                return 'Editing Record ' + record.get('id');
            else
                return 'New Record';
        };

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="panel panel-primary">
                            <div className="panel-heading">{renderRecordTitle()}</div>
                            <div className="panel-body">
                                <RecordForm binding={binding} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="panel panel-default">
                            <div className="panel-heading">Record List</div>
                            <div className="panel-body">
                                <RecordList binding={binding} onRecordEdit={this._onRecordEdit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Bootstrap = React.createFactory(Ctx.bootstrap(App));

React.render(
    Bootstrap(),
    document.getElementById('main')
);