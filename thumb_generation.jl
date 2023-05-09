using ImageTransformations, Images, Graphics, Interpolations

cd("/home/nikos/nmdimitriou.github.io/images/original/")
input_dir = "."
output_dir = "../thumbs/"
#width = 400;
height = 200;


for file in readdir(input_dir)
    if endswith(file, "_thumb.jpg")
        continue;
    else
        input_path = joinpath(input_dir, file)
        output_path = joinpath(output_dir, splitext(file)[1]*"_thumb.jpg")
        input_image = load(input_path)
        #height = round(Int, width / aspect_ratio(input_image));
        width = round(Int, height/aspect_ratio(input_image)); #height/width
        println(width)
        thumbnail_size = (height,width);
        #thumbnail = imresize(input_image, thumbnail_size,method=BSpline())

        σ = map((o,n)->0.15*o/n, size(input_image), thumbnail_size)
        kern = KernelFactors.gaussian(σ)   # from ImageFiltering
        thumbnail = imresize(imfilter(input_image, kern, NA()), thumbnail_size)
        Images.save(output_path, thumbnail)
    end
end
