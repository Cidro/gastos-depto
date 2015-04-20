var GenericInput = React.createClass({
    displayName: 'GenericInput',
    mixins: [Morearty.Mixin],
    handleChange: function (e) {
        var binding = this.getDefaultBinding(),
            value = this.getValue(e.target.value);
        binding.set(this.props.id, value);
    },
    getValue: function (value) {
        var type = this.props.type || 'text';
        if(type == 'number')
            value = parseInt(value, 10);
        return value;
    },
    render: function(){
        var binding = this.getDefaultBinding(),
            id = this.props.id,
            type = this.props.type || 'text',
            label = this.props.label;
        return(
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input type={type} name={id} id={id} className="form-control" value={binding.get().get(id)} onChange={this.handleChange}/>
            </div>
        );
    }
});
