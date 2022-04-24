@extends('layouts.default')

@section('title', 'Appointment')

@section('content')

    <!-- Content -->
    <div class="min-h-screen">
        <div class="lg:max-w-7xl lg:flex items-center mx-auto px-4 lg:px-14 pt-6 py-20 lg:py-24 gap-x-24">

            <!-- Detail Doctor  -->
            <div class="lg:w-5/12 lg:border-r h-72 lg:h-[30rem] flex flex-col items-center justify-center text-center">
                <img src="{{ url(Storage::url($doctor->photo)) }}"
                    class="inline-block w-32 h-32 rounded-full bg-center object-cover object-top" alt="doctor-1" />
                <div class="text-[#1E2B4F] text-lg font-semibold mt-4">
                    {{ $doctor->name ?? '' }}
                </div>

                <div class="text-[#AFAEC3] mt-1">{{ $doctor->specialist->name ?? '' }}</div>

                <div class="flex justify-center items-center gap-x-2 mt-4">
                    <div class="flex items-center gap-2">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340" />
                        </svg>

                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340" />
                        </svg>

                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340" />
                        </svg>

                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340" />
                        </svg>

                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340" />
                        </svg>
                    </div>
                    <span class="text-[#1E2B4F] font-medium"> (12,495) </span>
                </div>
            </div>

            <!-- Form Appointment -->
            <div class="lg:w-1/3 mt-10 lg:mt-0">
                <h2 class="text-[#1E2B4F] text-3xl font-semibold leading-normal">
                    Apply for <br />
                    New Appointment
                </h2>

                <form action="{{ route('appointment.store') }}" method="POST" enctype="multipart/form-data" class="mt-8 space-y-5">

                    @csrf

                    <label class="block">
                        <select
                            name="consultation_id"
                            id="consultation_id"
                            class="block w-full rounded-full py-4 text-[#1E2B4F] font-medium px-7 border border-[#d4d4d4] focus:outline-none focus:border-[#0D63F3]"
                            placeholder="Topik Konsultasi" required
                        >

                            <option disabled selected class="hidden">
                                Topik Konsultasi
                            </option>

                            @foreach ($consultation as $consultation_item)
                                <option value="{{ $consultation_item->id }}">{{ $consultation_item->name }}</option>
                            @endforeach

                        </select>
                    </label>

                    <label class="block">
                        <select
                            name="level_id"
                            id="level_id"
                            class="block w-full rounded-full py-4 text-[#1E2B4F] font-medium px-7 border border-[#d4d4d4] focus:outline-none focus:border-[#0D63F3]"
                            placeholder="Level" required
                        >
                            <option value="" disabled selected class="hidden">Level</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </label>

                    <label class="relative block">
                        <input
                            type="text"
                            id="date"
                            name="date"
                            class="block w-full rounded-full py-4 text-[#1E2B4F] font-medium placeholder:text-[#AFAEC3] placeholder:font-normal px-7 border border-[#d4d4d4] focus:outline-none focus:border-[#0D63F3]"
                            placeholder="Choose Date" required
                        />
                            <span
                            class="absolute top-0 right-[11px] bottom-1/2 translate-y-[58%]"
                            ><svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                                stroke="#AFAEC3"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M3 10H21"
                                stroke="#AFAEC3"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M16 2V6"
                                stroke="#AFAEC3"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M8 2V6"
                                stroke="#AFAEC3"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </label>

                    <label class="relative block">
                        <input
                            type="text"
                            id="time"
                            name="time"
                            class="block w-full rounded-full py-4 text-[#1E2B4F] font-medium placeholder:text-[#AFAEC3] placeholder:font-normal px-7 border border-[#d4d4d4] focus:outline-none focus:border-[#0D63F3]"
                            placeholder="Choose Time" required
                        />
                        <span
                        class="absolute top-0 right-[11px] bottom-1/2 translate-y-[58%]"
                        ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#AFAEC3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M12 6V12L16 14"
                            stroke="#AFAEC3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        </span>
                    </label>

                    <input type="hidden" name="doctor_id" value="{{ $doctor->id ?? '' }}">

                    <div class="grid">
                        <button type="submit" class="bg-[#0D63F3] rounded-full mt-5 text-white text-lg font-medium px-10 py-3 text-center" onclick="return confirm('Are you sure want to confirm this appointment ?')">Continue</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
    <!-- End Content -->

@endsection

@push('after-style')
    <link rel="stylesheet" href="{{ url('https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css') }}"/>
@endpush

@push('after-script')
    <script src="{{ url('https://cdn.jsdelivr.net/npm/flatpickr') }}"></script>

    <script>
        // Date Picker
        const fpDate = flatpickr('#date', {
            altInput: true,
            altFormat: 'd F Y',
            dateFormat: 'Y-m-d',
            disableMobile: 'true',
        });

        // Time Picker
        const fpTime = flatpickr('#time', {
            time_24hr: true,
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i',
            disableMobile: 'true',
        });
    </script>
@endpush
