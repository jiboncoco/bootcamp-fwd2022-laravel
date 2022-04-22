<table class="table table-bordered">
    <tr>
        <th>Role</th>
        <td>{{ isset($role->title) ? $role->title : 'N/A' }}</td>
    </tr>
    <tr>
        <th>Permission</th>
        <td>
            @foreach($role->permission as $id => $permission)
                <span class="badge bg-yellow text-dark mr-1 mb-1">{{ isset($permission->title) ? $permission->title : 'N/A' }}</span>
            @endforeach
        </td>
    </tr>
</table>
