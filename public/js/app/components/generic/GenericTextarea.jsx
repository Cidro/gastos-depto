var GenericTextarea = React.createClass({
    displayName: 'GenericTextarea',
    mixins: [Morearty.Mixin],
    handleChange: function (e) {
        var binding = this.getDefaultBinding(),
            value = e.target.value;
        binding.set(this.props.id, value);
    },
    render: function(){
        var binding = this.getDefaultBinding(),
            id = this.props.id,
            label = this.props.label;
        return(
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <textarea name={id} id={id} className="form-control" value={binding.get().get(id)} onChange={this.handleChange}/>
            </div>
        );
    }
});