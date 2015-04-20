<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GastosDepto</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php echo url('/css/app.css') ?>"/>
</head>
<body>
<div id="main"></div>
<script>
    var Users = [
        {
            'id': 1,
            'username': 'matias'
        },
        {
            'id': 2,
            'username': 'francisco'
        }
    ];
    var Categories = [
        {
            'id': 1,
            'name': 'luz'
        },
        {
            'id': 2,
            'name': 'gas'
        },
        {
            'id': 3,
            'name': 'internet'
        }
    ];
</script>
<script src="<?php echo url('/bower_components/jquery/dist/jquery.js') ?>"></script>
<script src="<?php echo url('/bower_components/bootstrap/dist/js/bootstrap.js') ?>"></script>
<script src="<?php echo url('/bower_components/immutable/dist/immutable.js') ?>"></script>
<script src="<?php echo url('/bower_components/react/react.js') ?>"></script>
<script src="<?php echo url('/bower_components/reflux/dist/reflux.js') ?>"></script>
<script src="<?php echo url('/bower_components/moreartyjs/dist/morearty.js') ?>"></script>
<script src="<?php echo url('/js/build/components/generic/GenericTextarea.js') ?>"></script>
<script src="<?php echo url('/js/build/components/generic/GenericInput.js') ?>"></script>
<script src="<?php echo url('/js/build/components/users/UserSelect.js') ?>"></script>
<script src="<?php echo url('/js/build/components/users/UserPicker.js') ?>"></script>
<script src="<?php echo url('/js/build/components/categories/CategorySelect.js') ?>"></script>
<script src="<?php echo url('/js/build/components/records/RecordListRowActions.js') ?>"></script>
<script src="<?php echo url('/js/build/components/records/RecordListRow.js') ?>"></script>
<script src="<?php echo url('/js/build/components/records/RecordList.js') ?>"></script>
<script src="<?php echo url('/js/build/components/records/RecordForm.js') ?>"></script>
<script src="<?php echo url('/js/build/app.js') ?>"></script>
<script src="<?php echo url('/js/build/stores/RecordStore.js') ?>"></script>
</body>
</html>