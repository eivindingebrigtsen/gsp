require 'open4'
PATH = ''
TMP = 'tmp'

desc 'Start test server'
task :test_server do
	sh('cd lib && java -jar jsTestDriver-1.2.1.jar --port 4224 --browser open')	
end

desc 'Run tests'
task :test_run do
	sh('cd lib && java -jar jsTestDriver-1.2.1.jar --tests all')	
end


desc 'javascript lint'
task :jslint do
	puts '###### JS LINT #######'
  sh 'lib/jsl --conf lib/jsl.default.conf'
end

desc "Sass Compile and copy css to minified folder"
task :css do

desc "Pack all external files"
task :pack_ext do
	puts '###### PACKING JS #######'
	js = [
    [true, PATH+'js/ext/jquery.js'],
    [false,PATH+'js/ext/underscore-min.js'],
    [false,PATH+'js/ext/excanvas.compiled.js'],
    [false,PATH+'js/ext/jquery-ui-all.min.js'],
#tests    [false,PATH+'js/ext/daterange.js'],
    [false, PATH+'js/ext/highcharts.src.js'],
    [true, PATH+'js/ext/jquery.cookie.js'],
    [true, PATH+'js/ext/jquery.json.js'],
		].map do |pack, file| 
    if(pack)
      puts "compressing #{file}"
      `java -jar lib/yuicompressor-2.4.2.jar #{file}`
    else
      puts "reading #{file}"
      IO.read(file)
    end
  end
  File.open(PATH+'js/ext/all.pack.js', 'w'){|io| io.write(js.join("\n"))}
end

desc 'Pack all js into one file'
task :pack_all => [:tabs, :strip, :css] do
# Removing compiled javascripts
	puts '###### PACKING JS #######'
  rm_rf(PATH+'js/min')
  mkdir_p(PATH+'js/min')
	if ! File.exists?(PATH+'js/ext/all.pack.js')
		sh('rake pack_ext')
	end
  js = [
    # false: don't compress
    # true: compress
    [false, PATH+'js/ext/all.pack.js'],
    [true, TMP+'/init.js']
  	].map do |pack, file| 
    if(pack)
      puts "compressing #{file}"
      `java -jar lib/yuicompressor-2.4.2.jar #{file}`
    else
      puts "reading #{file}"
      IO.read(file)
    end
  end
  File.open(PATH+'js/min/sb-all.pack.js', 'w'){|io| io.write(js.join("\n"))}
  rm_rf(TMP)
	res = sh('cd lib && java -jar jsTestDriver-1.2.1.jar --config jsTestDriverPacked.conf --tests all')	
end

desc 'Replace Tabs with spaces'
task :tabs do
	puts '###### TABS #######'
  Dir[PATH+'**/*'].each do |f|
    next if File.directory?(f) 
    source = File.open(f, 'rb').read
    case File.extname(f)
    when '.js', '.css', '.html', '.scss'
			next if File.dirname(f).match(/ext/)
      source.gsub!(/\t/, '  ')
    end
    File.open("#{File.dirname(f)}/#{File.basename(f)}", 'wb') {|io| io.write(source)}
  end
end

desc 'strip console logs'
task :strip => [:jslint, :tabs] do
	puts '###### STRIPPING CONSOLE CALLS #######'
  rm_rf(TMP)
  mkdir_p(TMP)
  Dir[PATH+'/**/*.js'].each do |f|
    next if File.directory?(f) || File.basename(f) =~ /(min\.|tests\.|pack\.|compiled\.)/
    source = File.open(f, 'rb').read
    file = File.basename(f)
		stripped = source
   	stripped = source.gsub(/console\.(time|log|error|warn|info|assert|group|groupEnd|timeEnd|profile|trace|profileEnd|dir)(.*?)[\;\n]/, '')
    File.open(TMP+'/'+file, 'w'){|io| io.write(stripped)}
  end
end

