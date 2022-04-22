<table class="table table-bordered">
    <tr>
        <th>Name</th>
        <td>{{ isset($specialist->name) ? $specialist->name : 'N/A' }}</td>
    </tr>
    <tr>
        <th>Price</th>
        <td>{{ isset($specialist->price) ? 'IDR '.number_format($specialist->price) : 'N/A' }}</td>
    </tr>
</table>
