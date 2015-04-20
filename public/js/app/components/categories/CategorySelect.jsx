var CategorySelect = React.createClass({
    displayName: 'CategorySelect',
    mixins: [Morearty.Mixin],
    handleChange: function (e) {
        var binding = this.getDefaultBinding();
        binding.set('category_id', parseInt(e.target.value, 10));
    },
    render: function(){
        var binding = this.getDefaultBinding(),
            record = binding.get(),
            categories = this.props.categories;

        var renderCategoriesOption = function(category, id){
            return (
                <option value={category.get('id')}  key={category.get('id')}>{category.get('name')}</option>
            );
        };

        return(
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className="form-control" value={record.get('category_id')} onChange={this.handleChange}>
                    <option> - - </option>
                    {categories.map(renderCategoriesOption).toArray()}
                </select>
            </div>
        );
    }
});