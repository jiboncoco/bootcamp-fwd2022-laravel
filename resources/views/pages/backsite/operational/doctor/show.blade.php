<table class="table table-bordered">
    <tr>
        <th>Specialist</th>
        <td>{{ isset($doctor->specialist->name) ? $doctor->specialist->name : 'N/A' }}</td>
    </tr>
    <tr>
        <th>Name</th>
        <td>{{ isset($doctor->name) ? $doctor->name : 'N/A' }}</td>
    </tr>
    <tr>
        <th>Fee</th>
        <td>{{ isset($doctor->fee) ? 'IDR '.number_format($doctor->fee) : 'N/A' }}</td>
    </tr>
    <tr>
        <th>Photo</th>
        <td>
            <img src="
                @if ($doctor->photo != "")
                    @if(File::exists('storage/'.$doctor->photo))
                        {{ url(Storage::url($doctor->photo)) }}
                    @else
                       {{ 'N/A' }}
                    @endif
                @else
                    {{ 'N/A' }}
                @endif "
                alt="doctor photo" class="users-avatar-shadow" height="100" width="100">
        </td>
    </tr>
</table>
